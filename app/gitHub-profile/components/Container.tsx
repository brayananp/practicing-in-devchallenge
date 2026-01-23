"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import UserInfo from "./UserInfo";
import RepositoryList from "./RepositoryList";
import Hero from "./Hero";
import { Skeleton } from "@/components/ui/Skeleton";

export interface UserData {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: any;
  blog: string;
  location: string;
  email: any;
  hireable: any;
  bio: string;
  twitter_username: any;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface Repository {
  id: number;
  name: string;
  description: string | null;
  license: {
    key: string;
    spdx_id: string;
  };
  forks_count: number;
  watchers_count: number;
  updated_at: string;
}

export default function Container() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingRepos, setIsLoadingRepos] = useState<boolean>(false);
  const [initialRepositoriesLimit, setInitialRepositoriesLimit] = useState<
    number | undefined
  >(4);
  const [searchQuery, setSearchQuery] = useState<string>("github");
  const [resultSearch, setResultSearch] = useState(null);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  const fetchUserResult = useCallback(
    async (username: string = searchQuery) => {
      if (!username) return;
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const data = await response.json();
        setResultSearch(data);
      } catch (error) {
        console.error("Error fetching user search result:", error);
      }
    },
    [searchQuery]
  );

  const handleData = () => {
    setUserData(resultSearch);
  };

  const fetchUserRepositories = useCallback(async () => {
    if (userData) {
      setIsLoadingRepos(true);
      try {
        const response = await fetch(userData.repos_url);
        const data = await response.json();
        setRepositories(data);
      } catch (error) {
        console.error("Error fetching user repositories:", error);
      } finally {
        setIsLoadingRepos(false);
      }
    }
  }, [userData]);

  useEffect(() => {
    if (userData) {
      fetchUserRepositories();
    }
  }, [userData, fetchUserRepositories]);

  // Initial fetch for the default user "github"
  useEffect(() => {
    const initialFetch = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://api.github.com/users/github`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error during initial fetch:", error);
      } finally {
        setIsLoading(false);
      }
    };
    initialFetch();
  }, []);

  const handleShowAll = useCallback(() => {
    setInitialRepositoriesLimit((prevLimit) => (prevLimit ? undefined : 4));
  }, []);

  const limitRepositories = useMemo(
    () =>
      repositories.slice(0, initialRepositoriesLimit ?? repositories.length),
    [repositories, initialRepositoriesLimit]
  );

  return (
    <>
      <Hero
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        fetchData={fetchUserResult}
        results={resultSearch}
        handleData={handleData}
      />
      <div className="w-full min-h-80 bg-[#364153] px-2 md:px-0">
        <div className="lg:w-[980px] px-2 lg:px-0 lg:mx-auto py-8">
          {isLoading ? (
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Skeleton className="h-24 w-24 rounded-2xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[90%]" />
            </div>
          ) : (
            userData && <UserInfo userData={userData} />
          )}

          {isLoadingRepos ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-32 w-full rounded-xl" />
              ))}
            </div>
          ) : (
            <RepositoryList
              repositories={limitRepositories}
              showAll={initialRepositoriesLimit !== undefined && repositories.length > 4}
              onShowAll={handleShowAll}
            />
          )}
        </div>
      </div>
    </>
  );
}
