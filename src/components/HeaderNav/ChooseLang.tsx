"use client";

import { Flex, FlexProps, Menu, Portal, Span } from "@chakra-ui/react";
import { useLocale, } from "next-intl";
import { useState } from "react";
import { BiGlobe } from "react-icons/bi";
import { useRouter } from '@/i18n/navigation';

export default function ChooseLang(props: FlexProps) {
   const router = useRouter();
   const locale = useLocale();

   const [lang, setLang] = useState(locale);

   const handleLangChange = (locale: "en" | "id") => {
      router.replace('/', { locale });
      setLang(locale);
   }

   return (
      <Menu.Root>
         <Menu.Trigger asChild>
            <Flex
               as={"button"}
               alignItems={"center"}
               gap={1}
               cursor={"pointer"}
               _hover={{ color: "gray.700" }}
               p={2}
               focusRing={"none"}
               {...props}
            >
               <Span fontSize={"sm"} fontWeight={"medium"}>
                  {lang.toUpperCase()}
               </Span>
               <BiGlobe />
            </Flex>
         </Menu.Trigger>
         <Portal>
            <Menu.Positioner>
               <Menu.Content minW="10rem" rounded="xl" zIndex={"popover"} >
                  <Menu.RadioItemGroup
                     value={lang}
                     onValueChange={(e) => handleLangChange(e.value as "en" | "id")}
                  >
                     {languages.map((item) => (
                        <Menu.RadioItem
                           key={item.value}
                           value={item.value}
                           rounded={"md"}
                        >
                           {item.label}
                           <Menu.ItemIndicator />
                        </Menu.RadioItem>
                     ))}
                  </Menu.RadioItemGroup>
               </Menu.Content>
            </Menu.Positioner>
         </Portal>
      </Menu.Root>
   );
}

const languages = [
   { label: "English", value: "en" },
   { label: "Bahasa Indonesia", value: "id" },
];
