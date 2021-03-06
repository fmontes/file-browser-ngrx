import { TreeItem, TreeItemType } from 'src/app/file-browser/models';

export const ITEMS: TreeItem[] = [
  {
    identifier: '0f8e77e0-19ca-4ca2-b840-4e9e567852ba',
    name: 'root1',
    extension: 'pdf',
    modDate: 'Thu Apr 13 1995 20:22:48 GMT+0000 (UTC)',
    title: 'This is a root file',
    fileSize: 1616,
    path: '/',
    type: TreeItemType.FILE
  },
  {
    identifier: '94f19bcf-87ce-4e22-97c6-7f14029662bd',
    name: 'root2',
    extension: 'pdf',
    modDate: 'Thu May 13 2005 20:22:48 GMT+0000 (UTC)',
    title: 'Another root file',
    fileSize: 2999,
    path: '/',
    type: TreeItemType.FILE
  },
  {
    identifier: '0f38f1b6-f851-40ea-92db-18c41e3d9490',
    name: 'ullamco',
    extension: 'html',
    modDate: 'Thu May 17 1990 01:20:42 GMT+0000 (UTC)',
    title: 'labore nisi pariatur',
    fileSize: 3638,
    path: '/lorem',
    type: TreeItemType.FILE
  },
  {
    identifier: '6fddef84-b9cb-4ce6-a12b-272490e124bb',
    name: 'adipisicing',
    extension: 'jpg',
    modDate: 'Fri Jun 04 2004 00:59:49 GMT+0000 (UTC)',
    title: 'do tempor id',
    fileSize: 2214,
    path: '/nisi',
    url: '//images.unsplash.com/photo-1546170711-7081b65b968a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=550&q=80',
    type: TreeItemType.FILE
  },
  {
    identifier: '9fd17b26-ef16-4677-8a86-9827befe21ab',
    name: 'nostrud',
    extension: 'docx',
    modDate: 'Fri Feb 17 1989 02:52:49 GMT+0000 (UTC)',
    title: 'occaecat dolor eiusmod',
    fileSize: 3905,
    path: '/lorem',
    url: '//images.unsplash.com/photo-1521633286323-05b17f47cb74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=550&q=80',
    type: TreeItemType.FILE
  },
  {
    identifier: '80460ffb-57ac-4196-9058-15fa865be16b',
    name: 'deserunt',
    extension: 'pdf',
    modDate: 'Sun Sep 25 1977 07:49:40 GMT+0000 (UTC)',
    title: 'eu minim ex',
    fileSize: 3296,
    path: '/nisi',
    type: TreeItemType.FILE
  },
  {
    identifier: 'e3e9acda-951c-4e55-80eb-f65b83852aab',
    name: 'afile',
    extension: 'jpg',
    modDate: 'Thu Apr 13 1995 20:22:48 GMT+0000 (UTC)',
    title: 'This is an image',
    fileSize: 1616,
    path: '/magna',
    url: '//images.unsplash.com/photo-1546168039-934e147af371?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=550&q=80',
    type: TreeItemType.FILE
  },
  {
    identifier: 'aafe654d-7929-4db6-8786-1565bf7d3632',
    name: 'ex',
    extension: 'pdf',
    modDate: 'Thu Apr 13 1995 20:22:48 GMT+0000 (UTC)',
    title: 'This is file inside magna folder',
    fileSize: 1616,
    path: '/magna',
    type: TreeItemType.FILE
  },
  {
    identifier: 'bd248af9-1260-4e2d-b2f2-966f35718a9c',
    name: 'voluptate',
    extension: 'js',
    modDate: 'Mon Jun 15 2009 04:34:01 GMT+0000 (UTC)',
    title: 'This is a file inside culpa folder',
    fileSize: 1789,
    path: '/culpa',
    type: TreeItemType.FILE
  },
  {
    identifier: 'd0217189-beaa-4013-8b12-d611e58fc320',
    name: 'pariatur',
    extension: 'jpg',
    modDate: 'Thu Dec 03 1987 01:36:32 GMT+0000 (UTC)',
    title: 'This file is inside adipisicing',
    fileSize: 1211,
    path: '/adipisicing',
    type: TreeItemType.FILE
  },
  {
    identifier: '72450ba3-2184-4801-b207-6a34f49c7124',
    name: 'labore',
    extension: 'pdf',
    modDate: 'Fri Jun 06 2008 06:11:07 GMT+0000 (UTC)',
    title: 'File in aliqua folder',
    fileSize: 3489,
    path: 'aliqua',
    type: TreeItemType.FILE
  },
  {
    identifier: '938bd915-c463-4f47-b3f6-f3d23604a627',
    name: 'sit',
    extension: 'docx',
    modDate: 'Mon Sep 12 1977 19:09:46 GMT+0000 (UTC)',
    title: 'A lorem file',
    fileSize: 3726,
    path: '/lorem',
    type: TreeItemType.FILE
  },
  {
    identifier: 'e28f5a84-64db-4ad6-b321-f4c897869f5f',
    name: 'est',
    extension: 'docx',
    modDate: 'Thu Apr 05 1973 01:41:57 GMT+0000 (UTC)',
    title: 'Im inside nisi',
    fileSize: 2131,
    path: '/nisi',
    type: TreeItemType.FILE
  },
  {
    identifier: '8022fc46-8548-4615-97ef-615d339a062f',
    name: 'eu',
    extension: 'html',
    modDate: 'Tue Aug 17 1999 15:19:30 GMT+0000 (UTC)',
    title: 'Im inside magna',
    fileSize: 3875,
    path: '/magna',
    type: TreeItemType.FILE
  },
  {
    identifier: 'a956c83b-5f3b-4e09-bf76-ca184d5f1000',
    name: 'excepteur',
    extension: 'html',
    modDate: 'Thu Jan 17 1991 09:10:17 GMT+0000 (UTC)',
    title: 'An adipisicing file',
    fileSize: 1409,
    path: 'adipisicing',
    type: TreeItemType.FILE
  },
  {
    identifier: 'e9c08473-3bf7-4593-80f0-bc0dbe3a3866',
    name: 'incididunt',
    extension: 'js',
    modDate: 'Fri Nov 08 1974 04:36:38 GMT+0000 (UTC)',
    title: 'I live in aliqua',
    fileSize: 3461,
    path: '/aliqua',
    type: TreeItemType.FILE
  },
  {
    identifier: '66c40bed-4362-49dd-bde0-2b9a996787a2',
    name: 'est',
    extension: 'txt',
    modDate: 'Wed Feb 14 1973 16:56:56 GMT+0000 (UTC)',
    title: 'Hey Im with lorem',
    fileSize: 2850,
    path: '/lorem',
    type: TreeItemType.FILE
  },
  {
    identifier: '7cd02f67-1114-4b25-93b7-74020b905294',
    name: 'sint',
    extension: 'js',
    modDate: 'Sun Jun 02 1985 14:10:25 GMT+0000 (UTC)',
    title: 'Nisi party',
    fileSize: 3533,
    path: '/nisi',
    type: TreeItemType.FILE
  },
  {
    identifier: '7af961a1-914b-4882-bf3b-3724c7bc388a',
    name: 'nulla',
    extension: 'pdf',
    modDate: 'Sat Sep 12 2009 04:42:00 GMT+0000 (UTC)',
    title: 'velit magna elit',
    fileSize: 3666,
    path: '/nisi',
    type: TreeItemType.FILE
  },
  {
    identifier: '90816ed3-922a-418d-ac04-a521c9d459b8',
    name: 'est',
    extension: 'html',
    modDate: 'Sat Apr 16 2005 18:24:22 GMT+0000 (UTC)',
    title: 'dolore nisi nulla',
    fileSize: 2485,
    path: '',
    type: TreeItemType.FILE
  },
  {
    identifier: '4580fe7c-1c9e-4337-9d47-afeef2571fd6',
    name: 'amet',
    modDate: 'Sun Jul 15 1979 14:06:38 GMT+0000 (UTC)',
    title: 'laborum sunt qui',
    fileSize: 2436,
    path: '/nisi',
    type: TreeItemType.FOLDER
  },
  {
    identifier: 'fb5e21ea-0b20-446c-af7d-27a8a70deab8',
    name: 'proident',
    extension: 'pdf',
    modDate: 'Wed Jul 16 2003 05:27:35 GMT+0000 (UTC)',
    title: 'ea reprehenderit deserunt',
    fileSize: 3907,
    path: '',
    type: TreeItemType.FILE
  },
  {
    identifier: '9e3cdb72-3380-4d09-a244-087042a13461',
    name: 'proident',
    extension: 'pdf',
    modDate: 'Sat Sep 17 1977 07:51:34 GMT+0000 (UTC)',
    title: 'magna exercitation exercitation',
    fileSize: 3032,
    path: '',
    type: TreeItemType.FILE
  },
  {
    identifier: 'b90dc524-1949-482b-a139-bc627e751499',
    name: 'irure',
    extension: 'js',
    modDate: 'Thu May 08 2008 06:49:34 GMT+0000 (UTC)',
    title: 'laboris anim minim',
    fileSize: 2838,
    path: '',
    type: TreeItemType.FILE
  },
  {
    identifier: 'aea584cf-35d7-4f99-9d69-ef676b2a9b7e',
    name: 'consectetur',
    extension: 'js',
    modDate: 'Tue Jul 15 1986 20:36:44 GMT+0000 (UTC)',
    title: 'nostrud consectetur exercitation',
    fileSize: 2931,
    path: '',
    type: TreeItemType.FILE
  },
  {
    identifier: 'f7d3433a-1a08-427e-a8b5-abac1d967390',
    name: 'in',
    extension: 'html',
    modDate: 'Thu Aug 19 2004 02:14:02 GMT+0000 (UTC)',
    title: 'consequat eu irure',
    fileSize: 1027,
    path: '',
    type: TreeItemType.FILE
  },
  {
    identifier: 'ffb58352-9bc2-4b4f-8d7c-c1aaf23dabf1',
    name: 'magna',
    extension: 'html',
    modDate: 'Sun Apr 05 2009 17:26:43 GMT+0000 (UTC)',
    title: 'sit voluptate deserunt',
    fileSize: 1581,
    path: '',
    type: TreeItemType.FILE
  },
  {
    identifier: '7b89dcf4-b2ed-487f-aa5a-0d33fd371adf',
    name: 'et',
    extension: 'docx',
    modDate: 'Sat May 24 2008 07:52:37 GMT+0000 (UTC)',
    title: 'consequat aute esse',
    fileSize: 2325,
    path: '',
    type: TreeItemType.FILE
  },
  {
    identifier: 'd0456361-5066-4765-86b4-e93e91755390',
    name: 'pariatur',
    extension: 'txt',
    modDate: 'Sun Mar 26 2017 13:07:45 GMT+0000 (UTC)',
    title: 'aliqua cillum mollit',
    fileSize: 1452,
    path: '',
    type: TreeItemType.FILE
  },
  {
    identifier: '2e12010a-f61a-40df-82b9-8de5615fda6d',
    name: 'magna',
    modDate: 'Tue Jun 23 1970 13:06:40 GMT+0000 (UTC)',
    title: 'Magna',
    path: '/',
    type: TreeItemType.FOLDER
  },
  {
    identifier: 'c383b428-aab7-4642-99e5-528c32fd1db9',
    name: 'culpa',
    modDate: 'Wed Jun 15 2011 08:34:35 GMT+0000 (UTC)',
    title: 'Culpa',
    path: '/',
    type: TreeItemType.FOLDER
  },
  {
    identifier: '5a177c9e-6d2a-4b87-b45a-80dd8e4e1e03',
    name: 'adipisicing',
    modDate: 'Thu May 28 1998 02:57:04 GMT+0000 (UTC)',
    title: 'Adipisicing',
    path: '/',
    type: TreeItemType.FOLDER
  },
  {
    identifier: '9c36258c-e6ed-4cf9-8c01-ffb71180e017',
    name: 'aliqua',
    modDate: 'Mon Feb 20 1995 20:55:19 GMT+0000 (UTC)',
    title: 'Aliqua',
    path: '/',
    type: TreeItemType.FOLDER
  },
  {
    identifier: 'efa87098-20c5-4337-8aa8-310205794984',
    name: 'lorem',
    modDate: 'Thu Jul 31 1975 15:45:04 GMT+0000 (UTC)',
    title: 'Lorem',
    path: '/',
    type: TreeItemType.FOLDER
  },
  {
    identifier: 'd01d8fcd-e714-4613-a8af-88201613d425',
    name: 'nisi',
    modDate: 'Fri Jun 30 1978 21:19:18 GMT+0000 (UTC)',
    title: 'Nisi',
    path: '/',
    type: TreeItemType.FOLDER
  }
];
