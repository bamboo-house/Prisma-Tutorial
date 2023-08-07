import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'


// 書籍一覧取得API
export async function GET() {
  const prisma = new PrismaClient()
  await prisma.$disconnect()

  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Alice',
  //     email: 'alice@prisma.io',
  //   },
  // })

  // console.log(user)

  // const user2 = await prisma.user.create({
  //   data: {
  //     name: 'Bob',
  //     email: 'bob@prisma.io',
  //     posts: {
  //       create: {
  //         title: 'Hello World',
  //         content: 'unko man',
  //       },
  //     },
  //   },
  // })

  // console.log(user2)

  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
    },
  })

  console.dir(usersWithPosts, { depth: null })

  return NextResponse.json(usersWithPosts);
}