#!/usr/local/bin/node
import axios from "axios";
import alfy from "alfy";

const token = alfy.config.get("joplinToken");

async function searchJoplin(query) {
    const encodedQuery = encodeURIComponent(query);
    const url = `http://127.0.0.1:41184/search?query=${encodedQuery}&token=${token}`;
    const response = await axios.get(url);
    const data = response.data;
    return data.items;
}

async function search() {
    const input = alfy.input;
    const results = await searchJoplin(input);
    const alfyResults = results.map(result => ({
        title: result.title,
        arg: result.id
    }))
    alfy.output(alfyResults);
}

void search();
