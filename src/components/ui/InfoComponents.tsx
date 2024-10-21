import { FC, ReactNode } from "react";


export const InfoSection: FC<{ title: string; children: ReactNode }> = ({ title, children }) => {
    return (
        <div className="py-8 ">
            <h2 className="text-neutral-80 mb-8 font-bold">{title}</h2>
            <div className="flex flex-col gap-8">{children}</div>
        </div>
    );
};


export const InfoRow: FC<{ title: string; children: ReactNode }> = ({ title, children }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-y-4 ">
            <h1 className="font-semibold w-[341px] text-xl">{title}</h1>
            <p className="text-xl w-full lg:max-w-[670px] text-neutral-80 pr-5">{children}</p>
        </div>
    );
};
