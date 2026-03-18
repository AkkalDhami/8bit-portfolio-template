import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
} from "@/components/ui/8bit/command";
import { GITHUB_URL } from "@/lib/constants";
import { Route } from "next";
import { useTheme } from "next-themes";
import { LuMoonStar } from "react-icons/lu";
import { RiGithubFill, RiHome4Line, RiPhoneLine } from "react-icons/ri";
import { socialLinks } from "./social-link";
import { CONTACT_INFO } from "../contact/contact-info";
import { HiOutlineCube } from "react-icons/hi";
import { PROJECTS } from "@/data/projects";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { IconType } from "react-icons";
import { useRouter } from "next/navigation";

export interface Item {
  value: string;
  label: string;
  icon: IconType | string;
  link?: boolean;
  newTab?: boolean;
}

export interface Group {
  value: string;
  items: Item[];
}

export const navigations: Item[] = [
  {
    icon: RiHome4Line,
    label: "Home",
    value: "/",
    link: true
  },
  {
    icon: HiOutlineCube,
    label: "Projects",
    value: "/projects",
    link: true
  },
  {
    icon: HiOutlineSquare3Stack3D,
    label: "Tech Skills",
    value: "/#skills",
    link: true
  },
  {
    icon: LiaLaptopCodeSolid,
    label: "Development Setup",
    value: "/dev-setup",
    link: true
  },
  {
    icon: RiPhoneLine,
    label: "Contacts",
    value: "/contacts",
    link: true
  }
];

export const projects: Item[] = PROJECTS.map(proj => {
  return {
    value: `/projects/${proj.slug}`,
    label: proj.title,
    icon: HiOutlineCube,
    link: true,
    newTab: false
  };
});

export const contacts: Item[] = CONTACT_INFO.filter(
  f => f.label.toLowerCase() != "github"
).map(c => {
  return {
    value: c.value,
    label: `${c.label}: ${c.value}`,
    icon: c.icon,
    link: false
  };
});

export const socials: Item[] = socialLinks.map(s => {
  return {
    value: s.href,
    label: `${s.name}`,
    icon: s.icon,
    link: true,
    newTab: true
  };
});

export const others: Item[] = [
  {
    icon: RiGithubFill,
    label: "Source Code",
    value: `${GITHUB_URL}/8bit-portfolio-template`,
    link: true,
    newTab: true
  },
  {
    icon: LuMoonStar,
    label: "Toggle Theme",
    value: `Toggle Theme`,
    link: false
  }
];

export const groupedItems: Group[] = [
  { items: navigations, value: "NAVIGATION" },
  { items: projects, value: "PROJECTS" },
  { items: contacts, value: "CONTACT INFO" },
  { items: socials, value: "SOCIAL LINKS" },
  { items: others, value: "OTHERS" }
];

export function SearchCommand({
  open,
  setOpen
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const router = useRouter();
  const { systemTheme, theme, setTheme } = useTheme();
  function handleItemClick(_item: Item) {
    if (_item?.link && _item.newTab) {
      return window.open(_item.value, "_blank");
    }

    if (_item.value.toLowerCase() === "toggle theme") {
      const currentTheme = theme === "system" ? systemTheme : theme;
      const isDark = currentTheme === "dark";

      setTheme(isDark ? "light" : "dark");
    }

    if (_item?.link) {
      router.push(_item.value as Route);
      setOpen(false);
    }
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {groupedItems.map(group => (
          <CommandGroup key={group.value} heading={group.value}>
            {group.items.map(item => (
              <CommandItem
                key={item.value}
                onSelect={() => handleItemClick(item)}
                value={item.value}>
                {typeof item.icon === "string" ? (
                  <span className="mr-2">{item.icon}</span>
                ) : (
                  <item.icon className="mr-2 size-4" />
                )}
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  );
}
