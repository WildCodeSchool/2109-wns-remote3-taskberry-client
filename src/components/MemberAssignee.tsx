import { IMemberAssignee } from "../models/MemberConfig";

export default function MemberAssignee({
  assigneePicture,
  firstName,
  lastName,
}: IMemberAssignee) {
  return (
    <div className="bg-orange-300">
      <p className="text-sm text-left mt-1 mb-2">
        {firstName} {lastName}
      </p>
      <img
        src={assigneePicture}
        className="h-[60px] w-[60px] self-end rounded-full"
      />
    </div>
  );
}
