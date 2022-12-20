import React ,{ useEffect, useState} from "react";
import { AppShell, Navbar, Header, Center } from '@mantine/core';
import DisplayData from "./displaydata";

function HomePage (){
    return(
        <AppShell
      padding="md"
      navbar={<Navbar width={{ base: 300 }} height={500} p="xs">Home</Navbar>}
      header={<Header height={60} p="xs">Truecaller Limited Company</Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
    <div>
         <DisplayData></DisplayData>
    </div>
    </AppShell>
    )
}

export default HomePage;
