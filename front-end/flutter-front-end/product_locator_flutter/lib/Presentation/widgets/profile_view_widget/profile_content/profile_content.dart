import 'package:product_locator_flutter/Presentation/responsive/Screen_type.dart';
import 'package:product_locator_flutter/Presentation/widgets/profile_view_widget/profile_content/profile_content_mobile.dart';
// import 'package:product_locator_flutter/responsive/Screen_type.dart';
import 'package:flutter/material.dart';
// import 'package:product_locator_flutter/responsive/orietation_layout.dart';
// import 'package:product_locator_flutter/widgets/product_locator_Home_cards/cards_content/cards_content_mobile.dart';
// import 'package:product_locator_flutter/widgets/profile_view_widget/profile_content/profile_content_mobile.dart';
// import 'package:product_locator_flutter/widgets/product_locator_Home_cards/cards_content/cards_content_tablet.dart';

class ProfileContent extends StatelessWidget {
  // final double? Width;

  final Image image;

  const ProfileContent({
    Key? key,
    required this.image,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ScreenTypeLayout(
      mobile: ProfileContentMobilePortrait(
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
