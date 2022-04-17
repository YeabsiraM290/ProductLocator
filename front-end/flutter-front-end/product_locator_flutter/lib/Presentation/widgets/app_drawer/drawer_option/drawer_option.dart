import 'package:product_locator_flutter/Presentation/responsive/Screen_type.dart';
import 'package:product_locator_flutter/Presentation/responsive/orietation_layout.dart';
import 'package:product_locator_flutter/Presentation/widgets/app_drawer/drawer_option/drawr_option_mobile.dart';
// import 'package:product_locator_flutter/responsive/Screen_type.dart';
// import 'package:product_locator_flutter/responsive/orietation_layout.dart';
import 'package:flutter/material.dart';
// import 'package:product_locator_flutter/responsive/sizing_information.dart';

// import 'package:product_locator_flutter/widgets/app_drawer/drawer_option/drawer_option.dart';
// import 'package:product_locator_flutter/widgets/app_drawer/drawer_option/drawr_option_mobile.dart';

class DrawerOption extends StatelessWidget {
  final String? title;
  final Image? icondata;
  const DrawerOption({Key? key, this.title, this.icondata}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return ScreenTypeLayout(
      mobile: OrientationLayout(
        portrait: DrawerOpitonMobilePortrait(title: title, iconData: icondata),
      ),
      // tablet: OrientationLayout(
      //   portrait: DrawerOptionTabletPortrait(
      //     title: title,
      //     icondata: icondata,
      //   ),
      //   landscape: DrawerOptionTabletLandscape(
      //     icondata: icondata,
      //   ),
      // )
    );
  }
}
