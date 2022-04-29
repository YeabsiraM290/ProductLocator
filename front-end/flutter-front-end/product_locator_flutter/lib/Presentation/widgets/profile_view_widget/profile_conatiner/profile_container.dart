import 'package:product_locator_flutter/Presentation/responsive/Screen_type.dart';
import 'package:product_locator_flutter/Presentation/responsive/orietation_layout.dart';
import 'package:product_locator_flutter/Presentation/widgets/profile_view_widget/profile_conatiner/profile_container_mobile.dart';
import 'package:product_locator_flutter/Presentation/widgets/profile_view_widget/profile_content/profile_content.dart';
// import 'package:product_locator_flutter/responsive/Screen_type.dart';
import 'package:flutter/material.dart';
// import 'package:product_locator_flutter/responsive/orietation_layout.dart';
// import 'package:product_locator_flutter/widgets/profile_view_widget/profile_conatiner/profile_container_mobile.dart';
// import 'package:product_locator_flutter/widgets/product_locator_Home_cards/cards_container/card_container_tablet.dart';
import 'package:product_locator_flutter/Presentation/widgets/product_locator_Home_cards/cards_content/cards_content.dart';
import 'package:product_locator_flutter/Presentation/widgets/profile_view_widget/profile_content/profile_content.dart';

class ProfileContainer extends StatelessWidget {
  const ProfileContainer({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const ScreenTypeLayout(
      mobile: OrientationLayout(
        portrait: ProfileContainerMobile(),
        landscape: CardContainerLandscape(),
      ),
    );
  }

  static List<Widget> getCardsContent() {
    return [
      ProfileContent(
        image: Image.asset('assets/user_profile.jpg'),
      ),
    ];
  }
}
