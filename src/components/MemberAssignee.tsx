import { IMemberAssignee } from "../models/MemberConfig";

export default function MemberAssignee({ assigneePicture }: IMemberAssignee) {
  return (
    <img
      src={assigneePicture}
      className="h-[60px] w-[60px] self-end rounded-full"
    />
  );
}
