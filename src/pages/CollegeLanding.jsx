import { useNavigate, useParams } from 'react-router-dom';
import { getCollege, getPgsForCollege } from '../data/pgs';
import { colleges } from '../data/pgs';
import PGListView from '../components/PGListView';

export default function CollegeLanding() {
  const { college: collegeSlug } = useParams();
  const navigate = useNavigate();
  const college = getCollege(collegeSlug);

  if (!college) {
    return (
      <div className="section container text-container">
        <h2>We haven't covered this college yet — it's on our list.</h2>
        <p style={{ marginTop: 12, color: 'var(--ink-soft)' }}>Want a heads-up when we do?</p>
      </div>
    );
  }

  const listings = getPgsForCollege(collegeSlug);

  return (
    <PGListView
      title={`PGs near ${college.full}`}
      subtitle="All personally verified — walking distance sorted, closest first."
      allPgs={listings}
      collegeName={college.name}
      showCollegeFilter
      colleges={colleges}
      collegeSlug={collegeSlug}
      onCollegeChange={(slug) => navigate(`/colleges/${slug}`)}
    />
  );
}
