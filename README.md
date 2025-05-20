# My Portfolio
```
module master_slave_jkff (
  input j, k, clk, clr,
  output q, qbar
);

  wire w1, w2, w3, w4, w5, w6, clkbar;

  nand (w1, j, clk, qbar, clr);
  nand (w2, k, clk, q);
  nand (w3, w1, w4);
  nand (w4, w2, w3, clr);

  not (clkbar, clk);

  nand (w5, w3, clkbar);
  nand (w6, w4, clkbar);
  nand (q, w5, qbar);
  nand (qbar, w6, q);

endmodule

module four_bit_sync_updown (
  output [3:0] q,
  input clk, m, clr
);
  wire qbar0, qbar1, qbar2, qbar3;
  wire mbar;
  wire w0, w1, w2, w3, w4, w5, w6, w7, w8, w9;

  // Always toggle J = 1, K = 1
  assign j = 1'b1, k = 1'b1;

  // Flip-Flop 0
  master_slave_jkff msjkff0(j, k, clk, clr, q[0], qbar0);

  // Direction control
  not (mbar, m); // m = 1 for up, m = 0 for down

  // FF1 control logic
  and (w0, q[0], mbar);
  and (w1, qbar0, m);
  or  (w2, w0, w1);

  master_slave_jkff msjkff1(w2, w2, clk, clr, q[1], qbar1);

  // FF2 control logic
  and (w3, q[0], q[1], mbar);
  and (w4, qbar0, qbar1, m);
  or  (w5, w3, w4);

  master_slave_jkff msjkff2(w5, w5, clk, clr, q[2], qbar2);

  // FF3 control logic
  and (w6, q[0], q[1], q[2], mbar);
  and (w7, qbar0, qbar1, qbar2, m);
  or  (w8, w6, w7);

  master_slave_jkff msjkff3(w8, w8, clk, clr, q[3], qbar3);

endmodule
```
