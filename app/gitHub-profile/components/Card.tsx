import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Repository } from "./Container";
import IconChieldAlt from "./IconChieldAlt";
import IconNesting from "./IconNesting";
import IconStart from "./IconStart";
import { Card as ShadcnCard, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

dayjs.extend(relativeTime);

type Props = {
  readonly repository: Repository;
};
export default function Card({ repository }: Props) {
  return (
    <ShadcnCard className="bg-gradient-to-r from-[#111729] to-[#1D1B48] border-none text-white hover:ring-1 hover:ring-primary transition-all duration-300">
      <CardHeader className="p-5 pb-0">
        <CardTitle className="text-xl font-medium truncate">
          {repository?.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-5 pt-3">
        <p className="text-base text-[#CDD5E0]/80 line-clamp-2 min-h-[3rem]">
          {repository?.description || "No description provided."}
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-5 text-[12px] items-center text-[#CDD5E0]">
          {repository?.license && (
            <div className="flex gap-1 items-center">
              <IconNesting />
              <span className="font-medium">{repository?.license?.spdx_id}</span>
            </div>
          )}
          <div className="flex gap-1 items-center">
            <IconChieldAlt />
            <span>{repository?.forks_count ?? 0}</span>
          </div>
          <div className="flex gap-1 items-center">
            <IconStart />
            <span>{repository?.watchers_count ?? 0}</span>
          </div>
          <span className="ml-auto opacity-70">
            updated {dayjs(repository?.updated_at).fromNow()}
          </span>
        </div>
      </CardContent>
    </ShadcnCard>
  );
}
