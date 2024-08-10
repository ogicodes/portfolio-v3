"use client";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";

export default function Projects() {
  return (
    <div className="flex flex-col md:grid grid-cols-12 grid-rows-2 px-8 items-center gap-16 w-full">
      <Card
        isFooterBlurred
        className="w-full h-[500px] col-span-12 md:col-span-5"
      >
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full  object-fit"
          src="/Outfit.png"
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <div className="flex flex-grow gap-2 items-center">
            <p className="text-white/90 text-tiny">Available soon.</p>
            <p className="text-white/90 text-tiny">Get notified.</p>
          </div>
          <Button
            className="text-tiny"
            color="secondary"
            radius="full"
            size="sm"
          >
            Notify Me
          </Button>
        </CardFooter>
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[400px] col-span-12 md:col-span-7"
      >
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 h-[100%] w-[100%] bg-white object-scale-down"
          src="/CAV_LOGO_1.webp"
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <p className="text-md font-small capitalize text-black/90">
                E-commerce Web App
              </p>
              <p className="text-xl font-medium capitalize text-black/90">
                The Better you look. The more you see.
              </p>
            </div>
          </div>
          <Button radius="full" size="sm">
            Shop Now
          </Button>
        </CardFooter>
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-[#1c2c43] uppercase font-bold">More than just a fitness app</p>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-fill"
          src="/ascend_logo.png"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-fit"
          src="/Virtual_Art_Gallery.png"
        />
        <CardFooter className="justify-between bg-white/50 border-black/0 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <p className="text-xs font-bold text-black/90">3D Art Gallery</p>
              <p className="text-sm font-bold capitalize text-black/90">
                a New Dimension of Art
              </p>
            </div>
          </div>
          <Button radius="full" size="sm">
            Enter Galery
          </Button>
        </CardFooter>
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-fit"
          src="/tarot_app_icon.png"
        />
        <CardFooter className="justify-between bg-white/10 border-black/40 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <p className="text-xs text-white/90">Tarot App</p>
              <p className="text-sm capitalize text-white/90">
                Unveil the Mysteries Within.
              </p>
            </div>
          </div>
          <Button radius="full" size="sm">
            View App
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
