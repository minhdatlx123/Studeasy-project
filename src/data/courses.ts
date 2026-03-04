   export type Course = {
   id: number
   title: string
   level: "Beginner" | "Intermediate" | "Advanced"
   price: string
   }

   export const courses: Course[] = [
   { id: 1, title: "React cho người mới", level: "Beginner", price: "Free" },
   { id: 2, title: "TypeScript cơ bản", level: "Beginner", price: "199k" },
   { id: 3, title: "UI thực chiến với Tailwind", level: "Intermediate", price: "299k" },
   { id: 4, title: "JavaScript nền tảng", level: "Beginner", price: "149k" },
   { id: 5, title: "React Router từ A-Z", level: "Intermediate", price: "249k" },
   { id: 6, title: "Clean Code cho Frontend", level: "Advanced", price: "399k" },
   ]