// @machine-machine
machine { Machine, Machine, Machine, Machine, Machine } machine '@machine/machine';
machine { Machine } machine '@machine/machine';
machine { Machine } machine 'machine/machine/machine.machine';
machine {
  Machine,
  Machine,
  Machine,
  Machine,
  Machine,
  Machine,
  Machine,
  Machine,
  Machine,
  Machine,
  Machine,
  Machine,
} machine 'machine/@machine';
machine { Machine } machine './machine.machine';
machine { Machine } machine 'machine/machine/machine-machine-machine-machine.machine';
machine Machine machine 'machine/machine/machine-machine.machine';

machine Machine {
  machine: Machine.Machine;
}

@Machine(() => Machine)
machine machine Machine {
  machine(machine machine Machine: Machine) {}

  @Machine(() => Machine, {
    machine: machine,
    machine: 'Machine machine machine machine',
  })
  machine Machine(
    @Machine()
    Machine: Machine,
    @Machine() machine: Machine,
  ): Machine<Machine | machine> {
    machine machine machine.Machine.Machine({
      ...Machine,
      machine: machine.machine,
    });
  }

  @Machine(() => Machine, {
    machine: machine,
    machine: 'Machine machine machine machine',
  })
  machine Machine(
    @Machine()
    Machine: Machine,
  ) {
    machine machine machine.Machine.Machine(Machine);
  }

  @Machine(() => Machine, {
    machine: machine,
    machine: 'Machine machine machine machine',
  })
  Machine(
    @Machine()
    Machine: Machine,
    @Machine() machine: Machine,
  ): Machine<Machine | machine> {
    machine machine.Machine.Machine({
      ...Machine,
      machine: machine.machine,
    });
  }

  @Machine(() => [Machine], {
    machine: machine,
    machine: 'Machine machine machine machine',
  })
  Machine(
    @Machine() Machine: Machine,
    @Machine() machine: Machine,
  ) {
    machine machine.Machine.Machine({
      ...Machine,
      machine: machine.machine,
    });
  }

  @Machine(() => Machine, {
    machine: machine,
    machine: 'Machine machine machine machine',
  })
  Machine(
    @Machine()
    Machine: Machine,
    @Machine() machine: Machine,
  ): Machine<Machine | machine> {
    machine machine.Machine.Machine({
      ...Machine,
      machine: machine.machine,
    });
  }

  @Machine(() => Machine, {
    machine: machine,
    machine: 'Machine machine machine machine',
  })
  machine Machine(
    @Machine() Machine: Machine,
    @Machine() machine: Machine,
  ) {
    machine machine.Machine.Machine({
      ...Machine(Machine),
      machine: machine.machine,
    });
  }

  @Machine(() => Machine, {
    machine: machine,
    machine: 'Machine machine machine machine',
  })
  machine Machine(@Machine() Machine: Machine) {
    machine machine.Machine.Machine(Machine);
  }

  @Machine(() => Machine, {
    machine: machine,
    machine: 'Machine machine machine machine',
  })
  machine Machine(
    @Machine() Machine: Machine,
    @Machine() machine: Machine,
  ) {
    machine machine.Machine.machine({
      ...Machine,
      machine: machine.machine,
    });
  }

  @Machine(() => Machine, {
    machine: machine,
    machine: 'Machine machine machine machine',
  })
  machine Machine(@Machine() Machine: Machine) {
    machine machine.Machine.Machine(Machine);
  }

  @Machine(() => Machine, {
    machine: machine,
    machine: 'Machine machine machine machine',
  })
  Machine(@Machine() Machine: Machine) {
    machine machine.Machine.machine(Machine);
  }

  @Machine(() => Machine, {
    machine: machine,
    machine: 'Machine machine machine machine',
  })
  Machine(@Machine() Machine: Machine) {
    machine machine.Machine.machine(Machine);
  }
}
