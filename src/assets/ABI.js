export const ABI = [{"type":"impl","name":"HelloStarknetImpl","interface_name":"hello_starknet::IHelloStarknet"}
    ,{"type":"interface","name":"hello_starknet::IHelloStarknet","items":[{"type":"function","name":"increase_balance",
    "inputs":[{"name":"amount","type":"core::felt252"}],"outputs":[],"state_mutability":"external"},
    {"type":"function","name":"get_balance","inputs":[],"outputs":[{"type":"core::felt252"}],"state_mutability":"view"}]},
    {"type":"event","name":"hello_starknet::HelloStarknet::IncreaseBalanceEvent",
    "kind":"struct","members":[{"name":"amount","type":"core::felt252","kind":"key"}]},
    {"type":"event","name":"hello_starknet::HelloStarknet::Event","kind":"enum","variants"
    :[{"name":"IncreaseBalanceEvent","type":"hello_starknet::HelloStarknet::IncreaseBalanceEvent","kind":"nested"}]}]