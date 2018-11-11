import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogPosts: BlogPost[][];
  currPage: number;
  constructor() { }

  ngOnInit() {
    this.currPage = 0;
    this.blogPosts = [
      [
        { title: 'bp1', summary: 'is a multilingual, web-based, free encyclopedia based on a model of openly editable content, a wiki. It is the largest and most popular general reference work on the World Wide Web,[3][4][5] and is one of the most popular websites by Alexa rank.[6] It is owned and supported by the Wikimedia Foundation, a non-profit organization which operates on money it receives from donors.[7][8][9]' },
        { title: 'bp2', summary: 'is a multilingual, web-based, free encyclopedia based on a model of openly editable content, a wiki. It is the largest and most popular general reference work on the World Wide Web,[3][4][5] and is one of the most popular websites by Alexa rank.[6] It is owned and supported by the Wikimedia Foundation, a non-profit organization which operates on money it receives from donors.[7][8][9]' },
        { title: 'bp3', summary: 'is a multilingual, web-based, free encyclopedia based on a model of openly editable content, a wiki. It is the largest and most popular general reference work on the World Wide Web,[3][4][5] and is one of the most popular websites by Alexa rank.[6] It is owned and supported by the Wikimedia Foundation, a non-profit organization which operates on money it receives from donors.[7][8][9]' }
      ], [
        { title: 'bp4', summary: 'is a multilingual, web-based, free encyclopedia based on a model of openly editable content, a wiki. It is the largest and most popular general reference work on the World Wide Web,[3][4][5] and is one of the most popular websites by Alexa rank.[6] It is owned and supported by the Wikimedia Foundation, a non-profit organization which operates on money it receives from donors.[7][8][9]' },
        { title: 'bp5', summary: 'is a multilingual, web-based, free encyclopedia based on a model of openly editable content, a wiki. It is the largest and most popular general reference work on the World Wide Web,[3][4][5] and is one of the most popular websites by Alexa rank.[6] It is owned and supported by the Wikimedia Foundation, a non-profit organization which operates on money it receives from donors.[7][8][9]' },
        { title: 'bp6', summary: 'is a multilingual, web-based, free encyclopedia based on a model of openly editable content, a wiki. It is the largest and most popular general reference work on the World Wide Web,[3][4][5] and is one of the most popular websites by Alexa rank.[6] It is owned and supported by the Wikimedia Foundation, a non-profit organization which operates on money it receives from donors.[7][8][9]' }
      ], [
        { title: 'bp7', summary: 'is a multilingual, web-based, free encyclopedia based on a model of openly editable content, a wiki. It is the largest and most popular general reference work on the World Wide Web,[3][4][5] and is one of the most popular websites by Alexa rank.[6] It is owned and supported by the Wikimedia Foundation, a non-profit organization which operates on money it receives from donors.[7][8][9]' },
        { title: 'bp8', summary: 'is a multilingual, web-based, free encyclopedia based on a model of openly editable content, a wiki. It is the largest and most popular general reference work on the World Wide Web,[3][4][5] and is one of the most popular websites by Alexa rank.[6] It is owned and supported by the Wikimedia Foundation, a non-profit organization which operates on money it receives from donors.[7][8][9]' },
        { title: 'bp9', summary: 'is a multilingual, web-based, free encyclopedia based on a model of openly editable content, a wiki. It is the largest and most popular general reference work on the World Wide Web,[3][4][5] and is one of the most popular websites by Alexa rank.[6] It is owned and supported by the Wikimedia Foundation, a non-profit organization which operates on money it receives from donors.[7][8][9]' },
      ]
    ]
  }


  updatePage(pageNumber) {
    this.currPage = pageNumber;
  }

}
