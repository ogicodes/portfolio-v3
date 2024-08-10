"use client";
import { Image, Link } from "@nextui-org/react";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import { Download } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Hero() {

  const parentVariants: Variants = {
    animate: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { type: 'decay', ease: 'easeInOut', velocity: 2 } },
  };

  return (
    <section className="flex h-svh w-full items-center justify-center p-16 flex-col md:flex-row text-center gap-9">
      <div className="flex items-center justfy-center md:order-last">
        <Image
          width={400}
          isBlurred
          radius="full"
          src="/OGI-GRAY-BG.jpg"
          alt="Ogi Dimitrijevic"
        />
      </div>
      <motion.div
        initial="initial"
        animate="animate"
        variants={parentVariants}
        className="md:w-1/2 mt-2"
      >
        <motion.h1 variants={itemVariants} className="text-4xl">
          Ogi <br /> Dimitrijevic
        </motion.h1>
        <motion.h2 variants={itemVariants}  className="text-2xl py-4">
          Full Stack Developer
        </motion.h2>
        <motion.div
          variants={itemVariants}
          className="flex row items-center justify-center w-1000"
        >
          <Button
            as={Link}
            target="_blank"
            isIconOnly
            size="lg"
            color="default"
            variant="light"
            href="https://www.instagram.com/ogi_codes/"
          >
            <FaInstagram className="w-[2rem] h-[2rem] text-primary" />
          </Button>
          <Button
            as={Link}
            target="_blank"
            isIconOnly
            size="lg"
            color="default"
            variant="light"
            href="https://github.com/ogicodes"
          >
            <FaGithubSquare className="w-[2rem] h-[2rem] text-primary" />
          </Button>
          <Button
            as={Link}
            target="_blank"
            isIconOnly
            size="lg"
            color="default"
            variant="light"
            href="https://www.linkedin.com/in/ogi-dim?originalSubdomain=ca"
          >
            <FaLinkedin className="w-[2rem] h-[2rem] text-primary" />
          </Button>
        </motion.div>
        <motion.h3 variants={itemVariants} className="font-mono">
          With a passion for developing modern React and THREE.js web apps for
          commercial businesses.
        </motion.h3>
        <Button
          startContent={<Download />}
          className="font-medium mt-8"
          size="lg"
          color="danger"
          variant="shadow"
        >
          Resume
        </Button>
      </motion.div>
    </section>
  );
}
