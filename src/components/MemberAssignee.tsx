import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_PROJECT_MEMBERS } from "../GraphQL/API";

interface IMemberAssignee {
  assignee: any;
}
export default function MemberAssignee({ assignee }: IMemberAssignee) {
  return (
    <img src={assignee} className="h-[60px] w-[60px] self-end rounded-full" />
  );
}
