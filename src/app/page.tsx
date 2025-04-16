// import { Button } from "@/components/ui/button";

import Button from "@/components/global/Button";

export default function Home() {
  return (
    <div className='font-extrabold mx-auto w-full h-screen'>
      {/* <Button variant={"outline"}>rahul</Button> */}
      <Button
        text='rahul'
        outline={false}
        customCLass='!border-2 !border-black !text-black'
      />
    </div>
  );
}
