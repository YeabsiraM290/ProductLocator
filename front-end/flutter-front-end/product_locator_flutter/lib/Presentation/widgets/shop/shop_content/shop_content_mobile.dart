// ignore_for_file: deprecated_member_use

import 'package:flutter/material.dart';

class ShopContentMobilePortrait extends StatelessWidget {
  final Color? color;
  final Image? image;
  final Image? detail;
  final Image? playbutton;
  final Image? progressindicator;
  final Image? title;
  final Image? view;
  const ShopContentMobilePortrait(
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
          Center(child: Text('Shop Name')),
          Card(
              margin: EdgeInsets.fromLTRB(50, 0, 50, 0),
              color: color!,
              // clipBehaviorAdvertisment: Clip.antiAlias,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(14),
              ),
              child: Column(
                children: [
                  FlatButton(
                    onPressed: () {},
                    // color: Colors.orange,
                    padding: EdgeInsets.all(20.0),
                    child: Column(children: [
                      ClipRRect(
                          borderRadius: BorderRadius.circular(20),
                          child: image!)
                    ]),
                  ),
                  Container(
                    padding: EdgeInsets.fromLTRB(30, 10, 30, 10),
                    child: Column(children: [
                      // ignore: prefer_const_literals_to_create_immutables
                      Row(children: [
                        const Text(
                          'Drual Sense',
                          style: TextStyle(
                              fontSize: 23, fontWeight: FontWeight.bold),
                        ),
                        Container(
                            decoration: BoxDecoration(
                              color: Color.fromARGB(255, 224, 224, 224),
                              border: Border.all(
                                  width: 2,
                                  color: Color.fromARGB(255, 202, 202, 202)),
                              borderRadius:
                                  BorderRadius.all(Radius.circular(50)),
                            ),
                            width: 45,
                            height: 45,
                            // color: Color.fromARGB(255, 209, 208, 203),
                            margin: EdgeInsets.fromLTRB(20, 0, 0, 15),
                            child: Icon(Icons.shopping_cart)),
                      ]),
                      const Text(
                        'DualSense also adds a build-in microphone array, which will enable players to easily chat with friends without a headset...',
                        style: TextStyle(fontSize: 15),
                      )
                    ]),
                  ),
                  Container(
                      margin: EdgeInsets.fromLTRB(80, 0, 0, 10),
                      // ignore: prefer_const_literals_to_create_immutables
                      child: Row(children: [
                        const Text('5000 ',
                            style: TextStyle(
                              fontSize: 20,
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
