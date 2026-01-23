/* eslint-disable @next/next/no-img-element */
import { UserData } from "./Container";
import InfoButton from "./InfoButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";

interface UserInfoProps {
  readonly userData: UserData;
}
export default function UserInfo({ userData }: UserInfoProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6 md:gap-9 items-start">
        <div className="size-[120px] bg-[#364153] rounded-2xl -mt-20 p-2 shadow-lg">
          <Avatar className="w-full h-full rounded-2xl aspect-square">
            <AvatarImage src={userData?.avatar_url} alt={userData.name} />
            <AvatarFallback className="rounded-2xl">
              {userData.login?.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-wrap gap-3 items-center pt-2">
          <InfoButton name="Followers" label={userData.followers ?? 0} />
          <InfoButton name="Following" label={userData.following ?? 0} />
          {userData.location && (
            <InfoButton name="Location" label={userData.location} />
          )}
        </div>
      </div>
      <div>
        <h1 className="text-[#CDD5E0] text-[32px] font-bold tracking-tight">
          {userData.name || userData.login}
        </h1>
        <p className="text-[#CDD5E0]/80 text-xl mt-2 max-w-2xl leading-relaxed">
          {userData.bio}
        </p>
      </div>
    </div>
  );
}
