// ? depicts optional fields

export type Project = {
    base : string;
    title: string;
    summary: string;
    description: string;
    tags?:string[];
    image?: string;
    links: {label : string, url : string}[];
    featured?: boolean;

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
    },

]