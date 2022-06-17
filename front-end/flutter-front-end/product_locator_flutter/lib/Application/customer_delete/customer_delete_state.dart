part of 'customer_delete_bloc.dart';

class CustomerProfileDeleteState extends Equatable {
  @override
  // TODO: implement props
  List<Object?> get props => [];
}

class CustomerProfileDeleteInitState extends CustomerProfileDeleteState {}

class CustomerProfileDeleteLoadingState extends CustomerProfileDeleteState {}

class CustomerProfileDeleteFetchedState extends CustomerProfileDeleteState {
  // // final CustomerProfileDeleteModel customerprofileDeletelist;
  // CustomerProfileDeleteFetchedState(this.customerprofileDeletelist);
  // @override
  // List<Object> get props => [customerprofileDeletelist];
}

class CustomerDeleteErrorState extends CustomerProfileDeleteState {
  final String message;
  CustomerDeleteErrorState({required this.message});
}
