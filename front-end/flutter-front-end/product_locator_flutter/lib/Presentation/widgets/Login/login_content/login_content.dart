import 'package:product_locator_flutter/Presentation/responsive/Screen_type.dart';
import 'package:product_locator_flutter/Presentation/widgets/Login/login_content/login_content_mobile.dart';
// import 'package:product_locator_flutter/responsive/Screen_type.dart';
import 'package:flutter/material.dart';
// import 'package:product_locator_flutter/widgets/Login/login_content/login_content_mobile.dart';
// import 'package:product_locator_flutter/widgets/product_locator_Home_cards/cards_content/cards_content_tablet.dart';

class LoginContent extends StatelessWidget {
  // final double? Width;
  final Color? color;
  final Image image;
  final Image? detail;
  final Image? playbutton;
  final Image? progressindicator;
  final Image? title;
  final Image? view;
  const LoginContent(
      {Key? key,
      this.color,
      required this.image,
      this.detail,
      this.playbutton,
      this.progressindicator,
      this.title,
      this.view})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ScreenTypeLayout(
      mobile: LoginContentMobilePortrait(
        image: image,
      ),
      // tablet: OrientationLayout(
      //     portrait: CardsContentTabletPortrait(
      //         color: color,
      //         image: image,
      //         detail: detail,
      //         playbutton: playbutton,
      //         progressindicator: progressindicator,
      //         title: title,
      //         view: view)),
    );
  }
}
