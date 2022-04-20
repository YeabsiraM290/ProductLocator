import 'package:product_locator_flutter/Presentation/widgets/app_drawer/app_drawer.dart';
// import 'package:product_locator_flutter/widgets/app_drawer/app_drawer.dart';
import 'package:flutter/material.dart';

class AppDrawerMobilePortrait extends StatelessWidget {
  const AppDrawerMobilePortrait({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    var orientation = MediaQuery.of(context).orientation;
    return Container(
        width: 250,
        color: Colors.blue,
        // decoration: const BoxDecoration(
        //     // color: Colors.black,
        //     boxShadow: [
        //       BoxShadow(
        //           blurRadius: 16, color: Color.fromARGB(158, 61, 111, 206))
        //     ]),
        child: Row(
          children: AppDrawer.getDrawerOption(),
        ));
  }
}

class AppDrawerMobileLandscape extends StatelessWidget {
  const AppDrawerMobileLandscape({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Container(
        decoration: const BoxDecoration(
            // color: Colors.black,
            boxShadow: [
              BoxShadow(blurRadius: 16, color: Color.fromARGB(31, 238, 12, 12))
            ]),
        child: Center(
            child: Column(
          children: AppDrawer.getDrawerOption(),
        )));
  }
}
