part of 'vendor_product_vendor_product_item_informatioin_edit_bloc.dart';

class ProductItemInformationEditState extends Equatable {
  @override
  // TODO: implement props
  List<Object?> get props => [];
}

class ProductItemInformationEditInitState
    extends ProductItemInformationEditState {}

class ProductItemInformationEditLoadingState
    extends ProductItemInformationEditState {}

class ProductItemInformationEditFetchedState
    extends ProductItemInformationEditState {
  final FoodItemInformationModel productItemInformation_list;

  ProductItemInformationEditFetchedState(this.productItemInformation_list);

  @override
  List<Object> get props => [
        productItemInformation_list,
      ];
}

class ProdductItemInformationEditErrorState
    extends ProductItemInformationEditState {
  final String message;
  ProdductItemInformationEditErrorState({required this.message});
}
