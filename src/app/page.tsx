import StatusLabel, { Status } from './components/StatusLabel';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
    </div>
  );
}
