// import AddCompanyButton from "./components/AddCompanyButton/AddCompanyButton";
// import LogoUploader from "./components/LogoUploader/LogoUploader";
import StatusLabel, { Status } from "./components/StatusLabel/StatusLabel";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
      {/* <LogoUploader label="Logo" placeholder="Upload photo" /> */}
    </div>
  );
}
