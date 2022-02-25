import CardAddTicket from "../components/CardAddTicket";
import CardNewTicket from "../components/CardNewTicket";
import Cardticket from "../components/Cardticket";
import Column from "../components/Column";

function ProjectBoard(): JSX.Element {
  return (
    <div className="min-h-screen ml-10 px-4 bg-white md:flex  items-end ">
      <Column statusId={1} label="À faire"></Column>
      <Column statusId={2} label="En cours"></Column>
      <Column statusId={3} label="Review"></Column>
      <Column statusId={4} label="Terminé"></Column>
    </div>
  );
}

export default ProjectBoard;
