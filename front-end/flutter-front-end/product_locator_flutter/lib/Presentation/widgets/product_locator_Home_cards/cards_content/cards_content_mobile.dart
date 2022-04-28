import 'package:flutter/material.dart';

class ProductContentMobilePortrait extends StatelessWidget {
  final Color? color;
  final Image? image;
  final Image? detail;
  final Image? playbutton;
  final Image? progressindicator;
  final Image? title;
  final Image? view;
  const ProductContentMobilePortrait(
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
          boxShadow: [
            BoxShadow(
              color: Color.fromARGB(255, 233, 233, 233).withOpacity(0.6),
              spreadRadius: 8,
              blurRadius: 6,
              offset: Offset(1, 2),
            ),
          ],
          borderRadius: BorderRadius.circular(20),
        ),
        child: Column(children: [
          Card(
              margin: EdgeInsets.fromLTRB(30, 10, 30, 10),
              color: color!,
              clipBehavior: Clip.antiAlias,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(14),
              ),
              child: Column(
                children: [
                  Stack(
                    clipBehavior: Clip.none,
                    children: [
                      SizedBox(
                          width:
                              orientation == Orientation.portrait ? 200 : 200,
                          child: image),
                      Positioned(
                          bottom: -20,
                          right: 50,
                          // right: 38,
                          child: Container(
                              height: 50,
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(50),
                                color: Colors.blue,
                              ),
                              child: InkWell(
                                  borderRadius: BorderRadius.circular(12),
                                  onTap: () {},
                                  child: Container(
                                      width: 100,
                                      height: 30,
                                      // color: Colors.blue,
                                      child: const Center(
                                          child: Text('Got to shop')))))),
                    ],
                  ),
                  Container(
                      margin: EdgeInsets.only(top: 30),
                      child: const Text(
                        'Gamming Computer',
                        style: TextStyle(
                            fontWeight: FontWeight.bold, fontSize: 20),
                      )),
                  Container(
                      // color: Colors.blue,
                      padding: EdgeInsets.fromLTRB(30, 10, 30, 10),
                      child: const Center(
                        child: Text(
                            'Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link',
                            style: TextStyle(
                                fontSize: 16, fontStyle: FontStyle.normal)),
                      )),
                  Row(
                    children: [
                      Container(
                          margin: EdgeInsets.only(left: 30),
                          child: Text('100 birr',
                              style: TextStyle(
                                  fontWeight: FontWeight.bold, fontSize: 20))),

                      // ignore: prefer_const_constructors
                      Container(
                        child: Expanded(flex: 2, child: Text('')),
                      ),

                      Container(
                          width: 60,
                          height: 40,
                          decoration: BoxDecoration(
                              color: Colors.blue,
                              borderRadius: BorderRadius.circular(12)),
                          margin: EdgeInsets.only(right: 30),
                          // color: Colors.blue,
                          child: const Icon(Icons.shopping_cart))
                    ],
                  )
                ],
              ))
        ]));
  }
}

class HomeTitle extends StatelessWidget {
  final Image? header;
  const HomeTitle({Key? key, this.header}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    var orientation = MediaQuery.of(context).orientation;
    return Container(
        margin: orientation == Orientation.portrait
            ? const EdgeInsets.fromLTRB(20, 10, 0, 0)
            : const EdgeInsets.only(left: 70),
        height: orientation == Orientation.portrait ? 40 : 40,
        child: Text('Product you may like',
            style: TextStyle(fontWeight: FontWeight.bold, fontSize: 25)));
  }
}
