import React from "react";
import { Repository } from "./Container";
import Card from "./Card";
import { Button } from "@/components/ui/Button";

interface RepositoryListProps {
  readonly repositories: Repository[];
  readonly showAll: boolean;
  readonly onShowAll: () => void;
}

export default function RepositoryList({
  onShowAll,
  repositories,
  showAll,
}: RepositoryListProps) {
  if (repositories.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-[#CDD5E0]/60">
        <p className="text-xl font-medium">No repositories found.</p>
      </div>
    );
  }

  return (
    <div className="pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-[34px] mt-[34px] items-stretch">
        {repositories.map((repository) => (
          <Card key={repository.id} repository={repository} />
        ))}
      </div>
      {showAll && (
        <div className="flex items-center justify-center py-12">
          <Button
            variant="link"
            className="text-[#CDD5E0] hover:text-white transition-colors text-lg"
            onClick={onShowAll}
          >
            View all Repositories
          </Button>
        </div>
      )}
    </div>
  );
}
