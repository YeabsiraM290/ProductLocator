import 'package:flutter/material.dart';
import 'package:product_locator_flutter/Presentation/responsive/Screen_type.dart';
import 'package:product_locator_flutter/Presentation/responsive/orietation_layout.dart';
import 'package:product_locator_flutter/Presentation/widgets/app_drawer/app_drawer_mobile.dart';
import 'package:product_locator_flutter/Presentation/widgets/app_drawer/drawer_option/drawer_option.dart';
// import 'package:product_locator_flutter/responsive/Screen_type.dart';
// import 'package:product_locator_flutter/responsive/orietation_layout.dart';
// import 'package:product_locator_flutter/widgets/app_drawer/app_drawer_mobile.dart';
// import 'package:product_locator_flutter/widgets/app_drawer/drawer_option/drawer_option.dart';

class AppDrawer extends StatelessWidget {
  const AppDrawer({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const ScreenTypeLayout(
      mobile: OrientationLayout(
        portrait: AppDrawerMobilePortrait(),
        landscape: AppDrawerMobileLandscape(),
      ),
      // tablet: OrientationLayout(
      //   portrait: AppDrawerTabletPortrait(),
      //   landscape: AppDrawerTabletLandscape(),
      // )
    );
  }

  static List<Widget> getDrawerOption() {
    return [
      DrawerOption(
        // title: 'Setting',
        icondata: Image.asset('assets/product_locator_.png'),
      ),
    ];
  }
}
