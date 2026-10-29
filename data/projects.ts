// ? depicts optional fields

export type ProjectType = "Game" | "Software";

export type Project = {
    base : string;
    title: string;
    summary: string;
    description: string;
    tags?:string[];
    image?: string;
    links: {label : string, url : string}[];
    featured?: boolean;
    date: string;
    type: ProjectType;

};

// Links need to start with http to be recognised as external links

export const projects : Project[] = [

    {
        base: "tasktrain",
        title: "TaskTrain",
        summary: "blank",
        description: "blank",
        tags: ["Godot", "Educational", "Game"],
        image: "path",
        links: [
            {label: "GitHub", url: "https://nat00n.itch.io"},
            {label: "Itch.io", url: "https://nat00n.itch.io/tasktrain"},
        ],
        featured: true,
        date: "2026-01-01",
        type: "Game",
    },

    {
        base: "bug",
        title: "bug",
        summary: "blank",
        description: "blank",
        tags: ["Godot", "Educational", "Game"],
        image: "path",
        links: [
            {label: "GitHub", url: "https://nat00n.itch.io/a"},
            {label: "Itch.io", url: "https://nat00n.itch.io/e"},
        ],
        featured: true,
        date: "2026-08-01",
        type: "Game",
    },

    {
        base: "gaming",
        title: "Gaming",
        summary: "blank",
        description: "blank",
        tags: ["Godot", "Educational", "Game"],
        image: "path",
        links: [
            {label: "GitHub", url: "https://nat00n.itch.io/i"},
            {label: "Itch.io", url: "https://nat00n.itch.io/o"},
        ],
        featured: true,
        date: "2026-06-01",
        type: "Game",
    },

        {
        base: "thedwifta",
        title: "The Dwifta",
        summary: "blank",
        description: "blank",
        tags: ["Godot", "Educational", "Game"],
        image: "path",
        links: [
            {label: "GitHub", url: "https://nat00n.itch.io/p"},
            {label: "Itch.io", url: "https://nat00n.itch.io/l"},
        ],
        featured: true,
        date: "2026-06-01",
        type: "Game",
    },


        {
        base: "minaha",
        title: "Mina ha",
        summary: "blank",
        description: "blank",
        tags: ["Godot", "Educational", "Game"],
        image: "path",
        links: [
            {label: "GitHub", url: "https://nat00n.itch.io/q"},
            {label: "Itch.io", url: "https://nat00n.itch.io/s"},
        ],
        featured: true,
        date: "2026-06-01",
        type: "Software",
    },


        {
        base: "seven",
        title: "Seven",
        summary: "blank",
        description: "blank",
        tags: ["Godot", "Educational", "Game"],
        image: "path",
        links: [
            {label: "GitHub", url: "https://nat00n.itch.io/r"},
            {label: "Itch.io", url: "https://nat00n.itch.io/w"},
        ],
        featured: true,
        date: "2026-01-01",
        type: "Software",
    },

]