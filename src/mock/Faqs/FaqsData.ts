interface Option {
    key: string;
    list: string;
}

interface Faq {
    key: string;
    title: string;
    optionsArray: Option[];
}
interface FaqsCollapse{
    key:string;
    title:string;
    content:string;
}

export const faqsData: Faq[] = [
    {
        key: "1",
        title: "General",
        optionsArray: [
            {
                key: "a1",
                list: "About Forwarding Limits",
            },
            {
                key: "a2",
                list: "Stolen Accounts",
            },
            {
                key: "a3",
                list: "About Creating a Business Name",
            },
            {
                key: "a4",
                list: "How To Get An Official Business Account",
            },
            {
                key: "a5",
                list: "About Your Business Profile",
            },
            // Add more options here
        ],
    },
    {
        key: "2",
        title: "Web And Desktop",
        optionsArray: [
            {
                key: "b1",
                list: "About Forwarding Limits",
            },
            {
                key: "b2",
                list: "Stolen Accounts",
            },
            {
                key: "b3",
                list: "About Creating a Business Name",
            },
            {
                key: "b4",
                list: "How To Get An Official Business Account",
            },
            {
                key: "b5",
                list: "About Your Business Profile",
            },
            // Add more options here
        ],
    },
    {
        key: "3",
        title: "Account",
        optionsArray: [
            {
                key: "c1",
                list: "About Forwarding Limits",
            },
            {
                key: "c2",
                list: "Stolen Accounts",
            },
            {
                key: "c3",
                list: "About Creating a Business Name",
            },
            {
                key: "c4",
                list: "How To Get An Official Business Account",
            },
            {
                key: "c5",
                list: "About Your Business Profile",
            },
            // Add more options here
        ],
    },
    {
        key: "4",
        title: "Customization",
        optionsArray: [
            {
                key: "d1",
                list: "How To Edit Your Profile",
            },
            {
                key: "d2",
                list: "Stolen Accounts",
            },
            {
                key: "d3",
                list: "How To Send Media, Contact And Information",
            },
            {
                key: "d4",
                list: "How To Edit Your Business Profile",
            },
            {
                key: "d5",
                list: "About Your Business Profile",
            },
            // Add more options here
        ],
    },
    {
        key: "5",
        title: "Payment",
        optionsArray: [
            {
                key: "e1",
                list: "How To Edit Your Profile",
            },
            {
                key: "e2",
                list: "Stolen Accounts",
            },
            {
                key: "e3",
                list: "How To Send Media, Contact And Information",
            },
            {
                key: "e4",
                list: "How To Edit Your Business Profile",
            },
            {
                key: "e5",
                list: "About Your Business Profile",
            },
            // Add more options here
        ],
    },
    {
        key: "6",
        title: "Business",
        optionsArray: [
            {
                key: "f1",
                list: "How To Edit Your Profile",
            },
            {
                key: "f2",
                list: "Stolen Accounts",
            },
            {
                key: "f3",
                list: "How To Send Media, Contact And Information",
            },
            {
                key: "f4",
                list: "How To Edit Your Business Profile",
            },
            {
                key: "f5",
                list: "About Your Business Profile",
            },
            // Add more options here
        ],
    },
    // Add more FAQs here
];
