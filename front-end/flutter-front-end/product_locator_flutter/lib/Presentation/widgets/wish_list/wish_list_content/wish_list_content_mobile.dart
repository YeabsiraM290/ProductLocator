// ignore_for_file: deprecated_member_use

import 'package:flutter/material.dart';

class WishListContentMobilePortrait extends StatelessWidget {
  final Color? color;
  final Image? image;
  final Image? detail;
  final Image? playbutton;
  final Image? progressindicator;
  final Image? title;
  final Image? view;
  const WishListContentMobilePortrait(
      {Key? key,
      this.color,
      this.image,
      this.detail,
      this.playbutton,
      this.progressindicator,
      this.title,
      this.view})
      : super(key: key);
  @override
  Widget build(BuildContext context) {
    var orientation = MediaQuery.of(context).orientation;
    // var margin_ortiantation = MediaQuery.of(context).si;
    return Container(
        margin: orientation == Orientation.portrait
            ? const EdgeInsets.only(top: 20)
            : const EdgeInsets.only(top: 3),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(20),
        ),
        child: Column(children: [
          Center(
              child: Text('Wish List',
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 25))),
          Container(
              margin: EdgeInsets.only(right: 200),
              child: Text(
                'Product',
                style: TextStyle(fontSize: 20),
              )),
          Divider(color: Colors.black),
          Card(
              margin: EdgeInsets.fromLTRB(30, 0, 30, 0),
              color: color!,
              // clipBehaviorAdvertisment: Clip.antiAlias,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(14),
              ),
              child: Column(
                children: [
                  Container(
                    width: 170,
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(20),
                      child: image!,
                    ),
                  ),
                  Container(
                    padding: EdgeInsets.fromLTRB(30, 10, 30, 10),
                    child: Column(children: [
                      Row(children: [
                        const Text(
                          'Product Name',
                          style: TextStyle(fontSize: 20),
                        ),
                        Container(
                          decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(10),
                              color: Colors.blue),
                          height: 40,
                          width: 30,
                          margin: EdgeInsets.only(left: 40),
                          child: const Icon(
                            Icons.mobile_screen_share_outlined,
                            color: Color.fromARGB(255, 233, 233, 233),
                          ),
                        ),
                        Container(
                          decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(10),
                              color: Colors.blue),
                          height: 40,
                          width: 30,
                          margin: EdgeInsets.only(left: 10),
                          child: const Icon(
                            Icons.delete_forever_outlined,
                            color: Color.fromARGB(255, 231, 231, 231),
                          ),
                        ),
                      ]),
                      Container(
                          // width: 440,
                          margin: EdgeInsets.only(top: 10),
                          child: Text(
                              'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem ).',
                              style: TextStyle(fontSize: 17)))
                    ]),
                  ),
                  Container(
                      margin: EdgeInsets.only(left: 70),
                      child: Row(children: [
                        Text(
                          'price',
                          style: TextStyle(
                            fontSize: 15,
                          ),
                        ),
                        Text('5000 ',
                            style: TextStyle(
                              fontSize: 25,
                              color: Colors.blue,
                            )),
                        Text(' birr', style: TextStyle()),
                      ]))
                ],
              )),
          // second card
        ]));
  }
}
