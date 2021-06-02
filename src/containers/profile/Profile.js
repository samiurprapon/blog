import React, { useState, useEffect, lazy, Suspense } from "react";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;
const GithubProfile = lazy(() =>
  import("../../components/githubProfile/GithubProfile")
);

export default function Profile() {
  const [prof, setrepo] = useState([]);

  function setProfileFunction(array) {
    setrepo(array);
  }

  useEffect(() => {
    const getProfileData = () => {
      let result = {
        data: {
          user: {
            name: "Samiur Prapon",
            bio: "♦️ World is Diamond Shaped.",
            avatarUrl:
              "https://avatars.githubusercontent.com/u/25266703",
            location: "Bangladesh",
          },
        },
      };

      setProfileFunction(result.data.user);
    };

    getProfileData();
  }, []);

  return (
    <Suspense fallback={renderLoader()}>
      <GithubProfile prof={prof} key={prof.id} />
    </Suspense>
  );
}
