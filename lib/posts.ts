import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Find the directory where our markdown files live
const postsDirectory = path.join(process.cwd(), "content/posts");

export function getSortedPostsData() {
  // Read all file names in the folder
  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get the ID/URL slug
    const id = fileName.replace(/\.md$/, "");

    // Read the markdown file as a string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      category: matterResult.data.category,
      excerpt: matterResult.data.excerpt,
    };
  });

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}