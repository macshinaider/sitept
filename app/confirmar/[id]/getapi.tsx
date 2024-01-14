"use client";
import axios from "axios";
const sitefront = process.env.NEXT_PUBLIC_API_URL;

export const getapi = axios.create({
	baseURL: sitefront + "/api",
});
