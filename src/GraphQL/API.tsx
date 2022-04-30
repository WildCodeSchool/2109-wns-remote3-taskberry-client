import { gql } from "@apollo/client";

export const GET_PROJECT_TICKETS = gql`
  query Query($projectId: Float!) {
    getProjectTickets(projectId: $projectId) {
      id
      name
      description
      createdAt
      finishedAt
      projectId
      statusId
      assigneeId
    }
  }
`;

export const GET_PROJECTS = gql`
  query Query {
    getProjects {
      id
      name
      finishedAt
      estimateEndAt
      description
      createdAt
    }
  }
`;

export const GET_USER_PROJECTS = gql`
  query GetUsers($userId: Float!) {
    getUserProjects(userId: $userId) {
      id
      name
      description
      createdAt
      finishedAt
      estimateEndAt
    }
  }
`;

export const GET_PROJECT_MEMBERS = gql`
  query Query($projectId: Float!) {
    getProjectUsers(projectId: $projectId) {
      id
      email
      profilePicture
      firstName
      lastName
    }
  }
`;
export const CREATE_TICKET = gql`
  mutation Mutation($ticketInput: TicketInput!) {
    createTicket(ticketInput: $ticketInput) {
      id
      name
      description
      createdAt
      projectId
      assigneeId
      statusId
    }
  }
`;
