import TicketColumn from "../components/TicketColumn";

function ProjectBoard(): JSX.Element {
  return (
    <div className="min-h-screen ml-10 px-4 bg-white md:flex  items-end ">
      <TicketColumn statusId={1} label="À faire"></TicketColumn>
      <TicketColumn statusId={2} label="En cours"></TicketColumn>
      <TicketColumn statusId={3} label="Review"></TicketColumn>
      <TicketColumn statusId={4} label="Terminé"></TicketColumn>
    </div>
  );
}

export default ProjectBoard;
