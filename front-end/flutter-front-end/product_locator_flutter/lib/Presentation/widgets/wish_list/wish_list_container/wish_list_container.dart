import 'package:product_locator_flutter/Presentation/responsive/Screen_type.dart';
import 'package:product_locator_flutter/Presentation/responsive/orietation_layout.dart';
import 'package:product_locator_flutter/Presentation/widgets/wish_list/wish_list_container/wish_list_container_mobile.dart';
import 'package:product_locator_flutter/Presentation/widgets/wish_list/wish_list_content/wish_list_content.dart';
// import 'package:product_locator_flutter/responsive/Screen_type.dart';
import 'package:flutter/material.dart';
// import 'package:product_locator_flutter/responsive/orietation_layout.dart';
// import 'package:product_locator_flutter/widgets/product_locator_Home_cards/cards_container/card_container_tablet.dart';
// import 'package:product_locator_flutter/widgets/profile_view_widget/profile_content/profile_content.dart';
// import 'package:product_locator_flutter/widgets/shop/shop_container/shop_contianer_mobile.dart';
// import 'package:product_locator_flutter/widgets/vendor/vendor_content/vendor_content.dart';
// import 'package:product_locator_flutter/widgets/wish_list/wish_list_container/wish_list_container_mobile.dart';
// import 'package:product_locator_flutter/widgets/wish_list/wish_list_content/wish_list_content.dart';
// import '../wish_list_content/wish_list_content.dart';
import '../wish_list_content/wish_list_content_mobile.dart';

class WishListContainer extends StatelessWidget {
  const WishListContainer({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const ScreenTypeLayout(
      mobile: OrientationLayout(
        portrait: WishListContainerMobile(),
        // landscape: CardContainerLandscape(),
      ),
    );
  }

  static List<Widget> getCardsContent() {
    return [
      WishListContent(
        color: Color.fromARGB(255, 255, 255, 255),
        image: Image.asset('assets/gamming_desktop.jpg'),
      ),
      WishListContent(
        color: Color.fromARGB(255, 255, 255, 255),
        image: Image.asset('assets/gamming_desktop.jpg'),
      ),
      WishListContent(
        color: Color.fromARGB(255, 255, 255, 255),
        image: Image.asset('assets/gamming_desktop.jpg'),
      ),
    ];
  }
}
