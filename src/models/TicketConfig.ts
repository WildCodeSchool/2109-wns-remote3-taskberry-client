export interface TicketProps {
  title: string;
  assigneeId: number;
}

export interface TicketColumnProps {
  label: string;
  statusId: number;
}

export interface Ticket {
  id: number;
  name: string;
  description: string;
  assigneeId: number;
  statusId: number;
}
