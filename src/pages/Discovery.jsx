import { pgs, colleges } from '../data/pgs';
import PGListView from '../components/PGListView';

export default function Discovery() {
  const all = pgs.map((pg) => ({ ...pg, walkMins: pg.colleges[0].mins }));
  return (
    <PGListView
      title="All verified PGs"
      subtitle="Sorted by walk time to the nearest college. We visited every one of these ourselves."
      allPgs={all}
    />
  );
}
