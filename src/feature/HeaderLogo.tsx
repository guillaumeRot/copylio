import Image from "next/image";

export const HeaderLogo = () => {
    return (
      <div className="flex justify-center">
        <Image
            src="/icon.png"
            width={300}
            height={300}
            alt="copylio logo"
          />
      </div>
    );
  };