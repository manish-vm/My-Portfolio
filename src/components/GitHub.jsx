import { useEffect, useMemo, useState } from "react";

const GITHUB_USERNAME = "manish-vm";
const PROFILE_URL = `https://github.com/${GITHUB_USERNAME}`;
const CONTRIBUTIONS_API_URL = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`;
const dayLabels = ["", "Mon", "", "Wed", "", "Fri", ""];

const fallbackProfile = {
  avatar_url: "https://github.com/manish-vm.png",
  name: "Manish",
  login: GITHUB_USERNAME,
  bio: "Full Stack Developer",
  html_url: PROFILE_URL,
  blog: "https://manish-portfolio-kappa-two.vercel.app/",
  followers: 0,
  following: 1,
  public_repos: 27,
};

const featuredRepositoryNames = [
  "My-Portfolio",
  "Quantix",
  "Quantix-backend",
  "Bullrise_Inventory-Frontend",
  "Bullrise_Inventory-backend",
  "Inventory-Management-Frontend",
  "Inventory-Management-Backend",
  "HRMS-Frontend",
  "HRMS-Backend",
  "Ecommerce-Mern-Application",
  "KTech-Site",
  "Online-Course-Enrollment-System-frontend",
  "Online-Course-Enrollment-System-backend",
];

const fallbackRepos = [
  { name: "My-Portfolio", language: "CSS", updated_at: "2026-07-07T00:00:00Z", description: "Personal portfolio website", stargazers_count: 0, html_url: `${PROFILE_URL}/My-Portfolio` },
  { name: "Quantix", language: "JavaScript", updated_at: "2026-07-07T00:00:00Z", description: "Weight based Stock Classification", stargazers_count: 0, html_url: `${PROFILE_URL}/Quantix` },
  { name: "Quantix-backend", language: "JavaScript", updated_at: "2026-07-07T00:00:00Z", description: "Backend for Quantix", stargazers_count: 0, html_url: `${PROFILE_URL}/Quantix-backend` },
  { name: "Bullrise_Inventory-Frontend", language: "JavaScript", updated_at: "2026-07-06T00:00:00Z", description: "Bullrise_Inventory-Frontend", stargazers_count: 0, html_url: `${PROFILE_URL}/Bullrise_Inventory-Frontend` },
  { name: "Bullrise_Inventory-backend", language: "JavaScript", updated_at: "2026-07-06T00:00:00Z", description: "Bullrise_Inventory-backend", stargazers_count: 0, html_url: `${PROFILE_URL}/Bullrise_Inventory-backend` },
  { name: "Inventory-Management-Frontend", language: "JavaScript", updated_at: "2026-07-06T00:00:00Z", description: "Focus-Engineering-Project", stargazers_count: 0, html_url: `${PROFILE_URL}/Inventory-Management-Frontend` },
  { name: "Inventory-Management-Backend", language: "JavaScript", updated_at: "2026-07-02T00:00:00Z", description: "Focus Engineering", stargazers_count: 0, html_url: `${PROFILE_URL}/Inventory-Management-Backend` },
  { name: "HRMS-Frontend", language: "JavaScript", updated_at: "2026-06-06T00:00:00Z", description: "Client-side Application of HRMS", stargazers_count: 0, html_url: `${PROFILE_URL}/HRMS-Frontend` },
  { name: "HRMS-Backend", language: "JavaScript", updated_at: "2026-06-06T00:00:00Z", description: "Server-side application of HR Management System", stargazers_count: 0, html_url: `${PROFILE_URL}/HRMS-Backend` },
  { name: "Ecommerce-Mern-Application", language: "JavaScript", updated_at: "2026-02-10T00:00:00Z", description: "E-commerce platform with secure authentication, role-based access, and core shopping features with MERN Stack and REST APIs", stargazers_count: 0, html_url: `${PROFILE_URL}/Ecommerce-Mern-Application` },
  { name: "KTech-Site", language: "TypeScript", updated_at: "2026-02-01T00:00:00Z", description: "Digital Marketing Site using React + Vite", stargazers_count: 0, html_url: `${PROFILE_URL}/KTech-Site` },
  { name: "Online-Course-Enrollment-System-frontend", language: "JavaScript", updated_at: "2026-01-01T00:00:00Z", description: "Course Enrollment System frontend", stargazers_count: 0, html_url: `${PROFILE_URL}/Online-Course-Enrollment-System-frontend` },
  { name: "Online-Course-Enrollment-System-backend", language: "JavaScript", updated_at: "2026-01-01T00:00:00Z", description: "Node.js + MongoDB backend", stargazers_count: 0, html_url: `${PROFILE_URL}/Online-Course-Enrollment-System-backend` },
];

const techBadges = ["JavaScript", "TypeScript", "React", "Node.js", "Express", "MongoDB", "CSS", "Vite"];
const strongestRepos = ["Bullrise_Inventory-Frontend", "Bullrise_Inventory-backend", "Inventory-Management-Frontend", "Inventory-Management-Backend", "HRMS-Frontend", "HRMS-Backend", "Quantix", "Ecommerce-Mern-Application", "My-Portfolio"];
const githubAchievements = [
  {
    title: "Pull Shark",
    image: "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
    count: "x2",
  },
  {
    title: "Quickdraw",
    image: "https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png",
  },
  {
    title: "YOLO",
    image: "https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png",
  },
];

const getRepoCategory = (repo) => {
  const name = repo.name.toLowerCase();
  const description = (repo.description || "").toLowerCase();
  if (name.includes("portfolio")) return "Portfolio";
  if (name.includes("inventory") || name.includes("bullrise")) return "Inventory Systems";
  if (name.includes("hrms")) return "HRMS";
  if (name.includes("ecommerce") || description.includes("e-commerce")) return "E-Commerce";
  if (name.includes("backend") || description.includes("backend") || description.includes("server-side")) return "Backend";
  if (name.includes("frontend") || description.includes("frontend") || description.includes("client-side")) return "Frontend";
  if (repo.language === "TypeScript") return "TypeScript";
  if (repo.language === "JavaScript") return "JavaScript";
  return "MERN Projects";
};

const getRepoTech = (repo) => {
  const text = `${repo.name} ${repo.description || ""} ${repo.language || ""}`.toLowerCase();
  return techBadges.filter((tech) => {
    const normalized = tech.toLowerCase();
    return text.includes(normalized) || (tech === "React" && text.includes("frontend")) || (tech === "Node.js" && text.includes("backend"));
  });
};

const formatContributionDate = (date) => new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric" }).format(new Date(`${date}T00:00:00`));
const getDateKey = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const getContributionLevel = (count) => {
  if (!count) return 0;
  if (count < 2) return 1;
  if (count < 4) return 2;
  if (count < 7) return 3;
  return 4;
};

const buildContributionWeeks = (contributions) => {
  if (!contributions.length) return [];

  const orderedDays = [...contributions].sort((a, b) => a.date.localeCompare(b.date));
  const firstDate = new Date(`${orderedDays[0].date}T00:00:00`);
  const startDate = new Date(firstDate);
  startDate.setDate(firstDate.getDate() - firstDate.getDay());

  const lastDate = new Date(`${orderedDays[orderedDays.length - 1].date}T00:00:00`);
  const contributionMap = new Map(orderedDays.map((day) => [day.date, day]));
  const weeks = [];
  const cursor = new Date(startDate);

  while (cursor <= lastDate) {
    const week = [];
    for (let weekday = 0; weekday < 7; weekday += 1) {
      const date = getDateKey(cursor);
      const contribution = contributionMap.get(date);
      week.push(contribution ? { ...contribution, level: getContributionLevel(contribution.count) } : null);
      cursor.setDate(cursor.getDate() + 1);
    }
    weeks.push(week);
  }

  return weeks;
};

const SkeletonCard = () => (
  <div className="github-skeleton" aria-hidden="true">
    <span></span>
    <strong></strong>
    <p></p>
  </div>
);

const GitHub = () => {
  const [profile, setProfile] = useState(fallbackProfile);
  const [repos, setRepos] = useState(fallbackRepos);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [totalContributions, setTotalContributions] = useState(null);
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const loadGitHub = async () => {
      setIsLoading(true);
      setHasError(false);

      try {
        const [profileResponse, reposResponse, contributionsResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { signal: controller.signal }),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`, { signal: controller.signal }),
          fetch(CONTRIBUTIONS_API_URL, { signal: controller.signal }).catch(() => null),
        ]);

        if (!profileResponse.ok || !reposResponse.ok) throw new Error("GitHub API request failed");

        const [liveProfile, liveRepos] = await Promise.all([profileResponse.json(), reposResponse.json()]);
        setProfile(liveProfile);
        setRepos(liveRepos.length ? liveRepos : fallbackRepos);

        if (contributionsResponse?.ok) {
          const contributionsData = await contributionsResponse.json();
          const liveContributions = contributionsData.contributions || [];
          const yearlyTotal = liveContributions.reduce((sum, day) => sum + (day.count || 0), 0);
          setContributions(liveContributions);
          setTotalContributions(Number.isFinite(yearlyTotal) ? yearlyTotal : null);
        } else {
          setContributions([]);
          setTotalContributions(null);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          setProfile(fallbackProfile);
          setRepos(fallbackRepos);
          setHasError(true);
          setContributions([]);
          setTotalContributions(null);
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadGitHub();
    return () => controller.abort();
  }, []);

  const enrichedRepos = useMemo(() => {
    const repoMap = new Map(repos.map((repo) => [repo.name, repo]));
    const ordered = featuredRepositoryNames
      .map((name) => repoMap.get(name) || fallbackRepos.find((repo) => repo.name === name))
      .filter(Boolean);

    repos.forEach((repo) => {
      if (!ordered.some((item) => item.name === repo.name)) ordered.push(repo);
    });

    return ordered.map((repo) => ({
      ...repo,
      category: getRepoCategory(repo),
      tech: getRepoTech(repo),
      isStrong: strongestRepos.includes(repo.name),
    }));
  }, [repos]);

  const topRepos = useMemo(() => enrichedRepos.filter((repo) => repo.isStrong).slice(0, 8), [enrichedRepos]);
  const contributionWeeks = useMemo(() => buildContributionWeeks(contributions), [contributions]);
  const languageCounts = useMemo(() => enrichedRepos.reduce((acc, repo) => {
    const language = repo.language || "Other";
    acc[language] = (acc[language] || 0) + 1;
    return acc;
  }, {}), [enrichedRepos]);
  const totalStars = useMemo(() => enrichedRepos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0), [enrichedRepos]);

  const ContributionGraph = () => (
    <div className="github-contribution-graph" aria-label={`${totalContributions ?? 0} contributions in the last year`}>
      <div className="contribution-months" aria-hidden="true">
        {contributionWeeks.map((week, index) => {
          const firstDay = week.find(Boolean);
          const previousWeek = contributionWeeks[index - 1];
          const previousFirstDay = previousWeek?.find(Boolean);
          const month = firstDay ? new Date(`${firstDay.date}T00:00:00`).toLocaleString("en", { month: "short" }) : "";
          const previousMonth = previousFirstDay ? new Date(`${previousFirstDay.date}T00:00:00`).getMonth() : null;
          const currentMonth = firstDay ? new Date(`${firstDay.date}T00:00:00`).getMonth() : null;
          return <span key={`month-${index}`}>{currentMonth !== previousMonth ? month : ""}</span>;
        })}
      </div>
      <div className="contribution-body">
        <div className="contribution-days" aria-hidden="true">
          {dayLabels.map((label, index) => <span key={`${label}-${index}`}>{label}</span>)}
        </div>
        <div className="contribution-weeks">
          {contributionWeeks.map((week, weekIndex) => (
            <div className="contribution-week" key={`week-${weekIndex}`}>
              {week.map((day, dayIndex) => (
                <span
                  className="contribution-cell"
                  data-level={day?.level || 0}
                  key={day?.date || `${weekIndex}-${dayIndex}`}
                  title={day ? `${day.count} contributions on ${formatContributionDate(day.date)}` : ""}
                  aria-label={day ? `${day.count} contributions on ${formatContributionDate(day.date)}` : "No contribution data"}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="contribution-footer">
        <a href="https://docs.github.com/en/account-and-profile/reference/profile-contributions-reference" target="_blank" rel="noreferrer">Learn how we count contributions</a>
        <div className="contribution-legend" aria-hidden="true">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((level) => <i key={level} data-level={level}></i>)}
          <span>More</span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="github-section" id="github">
      <div className="github-section-header">
        <p className="eyebrow">GitHub Showcase</p>
        <h2 className="section-title">Open Source & Product Work<span></span></h2>
        <p>Recruiter-friendly snapshot of Manish's public repositories, production systems, and active engineering focus.</p>
      </div>

      {hasError && <div className="github-alert" role="status">GitHub API data is temporarily unavailable or rate-limited. Showing verified fallback repository data.</div>}

      {isLoading ? (
        <div className="github-loading-grid">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      ) : (
        <>
          <div className="github-premium-grid">
            <div className="github-profile-stack">
              <article className="github-profile-card">
                <img src={profile.avatar_url || fallbackProfile.avatar_url} alt="Manish GitHub avatar" loading="lazy" />
                <div>
                  <p className="eyebrow">Full Stack Developer</p>
                  <h3>{profile.name || "Manish"}</h3>
                  <a href={profile.html_url || PROFILE_URL} target="_blank" rel="noreferrer">@{profile.login || GITHUB_USERNAME}</a>
                  <p>{profile.bio || "Full Stack Developer building scalable web applications and AI-powered solutions."}</p>
                </div>
                <div className="github-profile-links">
                  <a href={PROFILE_URL} target="_blank" rel="noreferrer">GitHub Profile</a>
                  <a href="https://manish-portfolio-kappa-two.vercel.app/" target="_blank" rel="noreferrer">Portfolio</a>
                  <a href="https://linkedin.com/in/manish310a" target="_blank" rel="noreferrer">LinkedIn</a>
                  <a href="https://www.instagram.com/manish_vmk_/" target="_blank" rel="noreferrer">Instagram</a>
                </div>
              </article>

              <article className="github-highlight-strip" aria-label="GitHub engineering highlights">
                <div>
                  <span>Product Buildout</span>
                  <strong>{topRepos.length}+ strong repos</strong>
                </div>
                <div>
                  <span>Core Stack</span>
                  <strong>React + Node.js</strong>
                </div>
                <div>
                  <span>Delivery Focus</span>
                  <strong>Inventory, HRMS, E-Commerce</strong>
                </div>
              </article>
            </div>

            <article className="github-stat-card github-repo-summary-card">
              <div className="github-panel-heading">
                <h3>Earned Achievements</h3>
                <a href={`${PROFILE_URL}?tab=achievements`} target="_blank" rel="noreferrer">{githubAchievements.length} badges</a>
              </div>
              <div className="github-achievement-grid" aria-label="GitHub earned achievements">
                {githubAchievements.map((achievement) => (
                  <a className="github-achievement-badge" href={`${PROFILE_URL}?tab=achievements`} target="_blank" rel="noreferrer" key={achievement.title}>
                    <span className="github-achievement-art">
                      <img src={achievement.image} alt="" loading="lazy" />
                    </span>
                    <strong>
                      {achievement.title}
                      {achievement.count && <small>{achievement.count}</small>}
                    </strong>
                  </a>
                ))}
              </div>
            </article>
          </div>

          <div className="github-insights-grid">
            <article className="github-panel contribution-card">
              <div className="github-panel-heading">
                <h3>{totalContributions !== null ? `${totalContributions.toLocaleString()} contributions in the last year` : "Contribution Graph"}</h3>
                <a href={`${PROFILE_URL}?tab=overview`} target="_blank" rel="noreferrer">View activity</a>
              </div>
              {contributionWeeks.length ? <ContributionGraph /> : <p className="contribution-empty">Contribution data is live on GitHub.</p>}
            </article>
            <article className="github-panel">
              <div className="github-panel-heading"><h3>GitHub Stats</h3><span>{totalStars} total stars</span></div>
              <div className="github-stats-panel" aria-label="Manish GitHub stats">
                <div><span>Repos</span><strong>{profile.public_repos ?? fallbackProfile.public_repos}</strong></div>
                <div><span>Stars</span><strong>{totalStars}</strong></div>
                <div><span>Followers</span><strong>{profile.followers ?? fallbackProfile.followers}</strong></div>
                <div><span>Following</span><strong>{profile.following ?? fallbackProfile.following}</strong></div>
              </div>
            </article>
            <article className="github-panel">
              <div className="github-panel-heading"><h3>Top Languages</h3><span>{Object.keys(languageCounts).length} tracked</span></div>
              <div className="language-list">
                {Object.entries(languageCounts).map(([language, count]) => <div key={language}><span>{language}</span><strong>{count}</strong></div>)}
              </div>
              <div className="github-tech-badges">{techBadges.map((tech) => <span key={tech}>{tech}</span>)}</div>
            </article>
          </div>

        </>
      )}
    </section>
  );
};

export default GitHub;
