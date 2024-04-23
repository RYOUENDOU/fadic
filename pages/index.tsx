import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Container, Paper } from "@mui/material";
import { Header } from "@/component/Template/Header";
import { Login } from "./Login";
import Footer from "@/component/Template/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container>
      <Header/>
      <Paper elevation={3}>
        <Login />
      </Paper>
      <Footer />
    </Container>
  );
}
