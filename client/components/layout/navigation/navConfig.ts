type DropdownItem = {
  name: string;
  items: Array<{ name: string; href: string }>;
};

interface Dropdown {
  label: string;
  name: string;
  href: string;
  items: DropdownItem[];
}

interface Lone {
  label: string;
  href: string;
}

interface NavConfig {
  dropdowns: { csa: Dropdown; csp: Dropdown };
  standalones: { raspberrypi: Lone; git: Lone; pbl: Lone };
}

const csa: Dropdown = {
  label: "CSA: Java",
  name: "CSA",
  href: "/csa",
  items: [
    {
      name: "Starters",
      items: [
        { name: "Spring Greeting", href: "/greet" },
        { name: "Binary Math", href: "/binary" },
        { name: "Images", href: "/images" },
      ],
    },
    {
      name: "Data",
      items: [
        { name: "SQL Person", href: "/sql/person" },
        { name: "SQL Family", href: "/sql/person" },
        { name: "Covid19", href: "/covid19" },
      ],
    },
    {
      name: "Algorithms",
      items: [
        { name: "Data filters", href: "/datafilters" },
        { name: "Fibonacci", href: "/fibonacci" },
        { name: "Palindrome", href: "/palindrome" },
        { name: "Javascript snake", href: "/jssnake" },
      ],
    },
    {
      name: "Course materials",
      items: [
        { name: "Repo", href: "/repo" },
        { name: "Deployment", href: "/raspberrypi" },
        { name: "Traditional Journal", href: "/traditionaljournal" },
        { name: "PBL Journal", href: "/pbljournal" },
        { name: "Tri1", href: "/tri1" },
      ],
    },
  ],
};

const csp: Dropdown = {
  label: "CSP: Python",
  name: "CSP",
  href: "/csp",
  items: [
    {
      name: "Flask",
      items: [
        { name: "Installations and basics", href: "/flask/intro" },
        { name: "Project tutorial", href: "/flask/tutorial" },
      ],
    },
    {
      name: "Data",
      items: [
        { name: "REST api", href: "/data/restapi" },
        { name: "SQL CRUD", href: "/data/sqlcrud" },
      ],
    },
    {
      name: "Algorithms",
      items: [
        { name: "Binary Search", href: "/algorithms/binarysearch" },
        { name: "Bubble sort", href: "/algorithms/bubblesort" },
        { name: "Palindrome", href: "/algorithms/palindrome" },
      ],
    },
    {
      name: "Course materials",
      items: [
        { name: "Repositories", href: "/course/repositories" },
        { name: "Deployment", href: "/course/deployment" },
        // { name: "Tri1", href: "/tri1" },
      ],
    },
  ],
};

const raspberrypi: Lone = {
  label: "Raspberry Pi",
  href: "/raspberrypi",
};
const git: Lone = {
  label: "GitHub + Git",
  href: "/git",
};

const pbl: Lone = {
  label: "Project based learning",
  href: "/pbl",
};

export const navConfig: NavConfig = {
  dropdowns: { csp, csa },
  standalones: { raspberrypi, git, pbl },
};
