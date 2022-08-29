#!/usr/local/bin/node
import alfy from "alfy";
import { execSync } from "child_process";

execSync(`open joplin://x-callback-url/openNote?id=${alfy.input}`);
